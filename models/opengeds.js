module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opengeds', {
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    givenname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    initials: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prefix_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prefix_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    suffix_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    suffix_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telephonenumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    faxnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tddnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    streetaddress_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    streetaddress_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    province_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    province_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postalcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departmentacronym: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departmentname_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departmentname_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    organizationacronym: {
      type: DataTypes.STRING,
      allowNull: true
    },
    organizationname_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    organizationname_fr: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'opengeds'
  });
};
