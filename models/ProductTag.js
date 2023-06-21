// *given code
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product', // Name of the referenced model
        key: 'id', // Primary key of the referenced model
      }
    },
    

   tag_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tag', // Name of the referenced model
      key: 'id', // Primary key of the referenced model
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
