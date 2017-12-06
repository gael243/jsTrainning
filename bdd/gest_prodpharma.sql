#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Article
#------------------------------------------------------------

CREATE TABLE Article(
        id_articles    Int NOT NULL ,
        lib_articles   Varchar (100) NOT NULL ,
        id_fournisseur Varchar (120) NOT NULL ,
        id_categorie   Int NOT NULL ,
        PRIMARY KEY (id_articles )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: categorie
#------------------------------------------------------------

CREATE TABLE categorie(
        id_categorie  Int NOT NULL ,
        lib_categorie Varchar (25) NOT NULL ,
        PRIMARY KEY (id_categorie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: stock
#------------------------------------------------------------

CREATE TABLE stock(
        id_stock      Varchar (100) NOT NULL ,
        lib_stock     Varchar (120) NOT NULL ,
        quantite      Int NOT NULL ,
        prix_unitaire Int NOT NULL ,
        id_articles   Int NOT NULL ,
        PRIMARY KEY (id_stock )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: fournisseur
#------------------------------------------------------------

CREATE TABLE fournisseur(
        id_fournisseur  Varchar (120) NOT NULL ,
        lib_fournisseur Varchar (100) NOT NULL ,
        Adresse         Varchar (100) NOT NULL ,
        Telephone       Varchar (100) ,
        PRIMARY KEY (id_fournisseur )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Client
#------------------------------------------------------------

CREATE TABLE Client(
        id_client        Varchar (100) NOT NULL ,
        Nom              Varchar (100) NOT NULL ,
        telephone        Varchar (100) NOT NULL ,
        Adresse_physique Varchar (100) NOT NULL ,
        sexe_client      Varchar (10) ,
        ville_provenance Varchar (100) ,
        PRIMARY KEY (id_client )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: paiement
#------------------------------------------------------------

CREATE TABLE paiement(
        id_paie         Varchar (25) NOT NULL ,
        date_paiement   Date ,
        Quantite_vendus Int NOT NULL ,
        prix_total      Int ,
        id_stock        Varchar (100) NOT NULL ,
        id_client       Varchar (100) NOT NULL ,
        PRIMARY KEY (id_paie )
)ENGINE=InnoDB;

ALTER TABLE Article ADD CONSTRAINT FK_Article_id_fournisseur FOREIGN KEY (id_fournisseur) REFERENCES fournisseur(id_fournisseur);
ALTER TABLE Article ADD CONSTRAINT FK_Article_id_categorie FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie);
ALTER TABLE stock ADD CONSTRAINT FK_stock_id_articles FOREIGN KEY (id_articles) REFERENCES Article(id_articles);
ALTER TABLE paiement ADD CONSTRAINT FK_paiement_id_stock FOREIGN KEY (id_stock) REFERENCES stock(id_stock);
ALTER TABLE paiement ADD CONSTRAINT FK_paiement_id_client FOREIGN KEY (id_client) REFERENCES Client(id_client);
