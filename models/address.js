module.exports=(sequelize,DataTypes) =>{
    const Model = sequelize.define('address',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        studentId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        
        },
        countryId:{
            type:DataTypes.INTEGER,
            allowNull:false

        }
    },
    
    {
        tableName:"address",
        timestamps : true,
        paronoid : true,
        underscored : false,
    });
    Model.associate= function(models){

        //says that departmentId belongs to department table
        this.studentId=this.belongsTo(models.student)
        this.countryId=this.belongsTo(models.country)
    };
    return Model
}