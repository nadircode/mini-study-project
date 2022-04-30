CREATE DATABASE `ecommercesystem` /*!40100 DEFAULT CHARACTER SET latin1 */;
SELECT `admin`.`idAdmin`,
    `admin`.`fullnameAdmin`,
    `admin`.`emailAdmin`,
    `admin`.`passwordAdmin`
FROM `ecommercesystem`.`admin`;
SELECT `client`.`idClient`,
    `client`.`fullname_Client`,
    `client`.`email_Client`,
    `client`.`mdp_Client`,
    `client`.`code_mdp_oublie`,
    `client`.`date_inscription`,
    `client`.`etat_ban`
FROM `ecommercesystem`.`client`;
