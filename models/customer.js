module.exports=(sequelize,DataTypes) =>{
    const Model = sequelize.define('customer123',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:DataTypes.STRING,
        deptName:DataTypes.STRING,
        
    },{
        timestamps : true,
        paronoid : true,
        underscored : false,
    });
    return Model;
}