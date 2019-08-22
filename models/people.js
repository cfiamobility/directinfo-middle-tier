module.exports = function(sequelize, DataTypes) {
  return sequelize.define('people', {
    agofficialname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gcprefixenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gctitleenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telephonenumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agpostalstreetnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agpostalstreetnameenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agpostalbuildingunittypeenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agpostalbuildingunitid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gcpostofficeboxenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gccityenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gcprovincenameenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postalcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gcbuildingnameenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agfloorenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agroomnumberenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agphysicalstreetnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agphysicalstreetnameenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agphysicalbuildingunittypeenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agphysicalbuildingunitid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agphysicalcityenglish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agphysicalprovincenameenglish: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'people'
  });
};
