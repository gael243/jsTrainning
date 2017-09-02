/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('pays', [])
        .controller('PaysController', ['$http',function($http) {
            this.country = {};
            this.index = {};
            this.reponse="";
              var vm=this;
        
        //var data = this;

        this.get = function () {

            $http.get('/countries')
                .then(function (response){
                    console.log(response.data );
                    vm.countries=response.data;
                   // vm.loading=false;

                });
        };
       this.get();
        this.enregistrer=function(pays){
            this.country=angular.copy(pays);

            $http.post('/countries',JSON.stringify(pays))
                .then(function (response){
                    console.log(response.data );
                    vm.countries=response.data;
                  if(response.data)
                  {
                      vm.reponse="donnee enregistrer avec succes";
                  }else{
                      vm.reponse="echec d'enregistrement";
                  }

                });
        }
          this.init=function(){
              this.country = {};
              this.index = {};
              this.reponse="";
          }

            this.deleteItem = function deleteItem(index) {

                this.countries.splice(index, 1);

            };

            //fonction pour enregistrer le nouveau pays

           /* this.enregistrer = function(pays) {

                this.country = angular.copy(pays);
                this.countries.push(pays);

            };*/

            //fonction pour recuperer l'item à modifier
            this.getItem = function(ind, pays) {

                this.country = angular.copy(pays);
                this.index = angular.copy(ind);


            };
            //fonction pour modifier l'item selectionner
            this.modifier = function(index, country) {

                $http.put('/countries/' + index, JSON.stringify(country))
                    .then(function (response) {
                        console.log(response.data);
                        vm.countries = response.data;

                        if (response.data) {
                            vm.mesg = "modification  reussi avec succès";
                        }
                        else {
                            vm.mesg = "echec de la modification de l'enregistrement";
                        }

                    });

                this.countries.splice(index, 1, country);
            };


        this.deleteItem = function (index) {
            $http.delete('/countries/' + index)
                .then(function (response) {
                    console.log(response.data);
                    vm.countries = response.data;

                    if (response.data) {
                        vm.mesg = "suppression  reussi avec succès";
                    }
                    else {
                        vm.mesg = "echec de la suppression de l'enregistrement";
                    }

                });
        }

        }]);

