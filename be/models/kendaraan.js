'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kendaraan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kendaraan.init({
    jenis: DataTypes.STRING,
    konsumsiBbm: DataTypes.INTEGER,
    jadwalService: DataTypes.DATE,
    riwayatPemakaian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kendaraan',
  });
  return Kendaraan;
};