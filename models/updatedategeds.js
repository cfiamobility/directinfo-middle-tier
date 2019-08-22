module.exports = function(sequelize, DataTypes) {
	return sequelize.define (
	"updatedategeds",
	{
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.fn("now")
		}
	},
	{
		tableName: "updatedategeds"
	}
	);
};
