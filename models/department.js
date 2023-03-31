module.exports=(sequelize,DataTypes) =>{
    const Model = sequelize.define('department',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }},
            
    {
        tableName:"department",
        timestamps : true,
        paronoid : true,
        underscored : false,
    });    

    //means one student can be a part of one department only
    Model.associate= function(models){
        this.student=this.hasOne(models.student)
    };
    return Model;
}   