module.exports = function(sequelize, DataTypes) {
	return sequelize.define (
	"updatedate",
	{
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.fn("now")
		}
	},
	{
		tableName: "updatedate"
	}
	);
};
