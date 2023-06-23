// *given code
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
// through table that connects our Product and Tag models by referencing their foreign keys
ProductTag.init(
  {
    id: {//
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {  // 1
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product', // Name of the referenced model
        key: 'id', // Primary key of the referenced model
      }
    },
    

   tag_id:{ //3
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tag', // Name of the referenced model
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
