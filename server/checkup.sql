-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
USE `checkupdb` ;

-- -----------------------------------------------------
-- Table `mydb`.`diagnoses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `checkupdb`.`diagnoses` ;

CREATE TABLE IF NOT EXISTS `checkupdb`.`diagnoses` (
  `id` INT NOT NULL,
  `naam` VARCHAR(45) NOT NULL,
  `plaats` VARCHAR(45) NOT NULL,
  `koorts` TINYINT NOT NULL,
  `braken` TINYINT NOT NULL,
  `diarree` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dokters`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `checkupdb`.`dokters` ;

CREATE TABLE IF NOT EXISTS `checkupdb`.`dokters` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `naam` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `adres` VARCHAR(100) NOT NULL,
  `nummer` VARCHAR(9) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
