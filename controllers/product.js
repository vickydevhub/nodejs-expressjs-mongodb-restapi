const express = require('express');
const Product = require('../models/Product');

const getAllProduct = async (req, res, next) => {
//router.get('/', auth ,async(req,res) => {
    try {
        const allProduct = await Product.find();
        res.json(allProduct);
    } catch (error) {
        res.json({message:error});
    }
     
};

const addProduct = async(req, res, next) => {
    const {name,price} = req.body
    if(!name || !price){
        return res.status(422).json({error:"Please add all fields"});
    }
    
        const product = new Product({
                name,
                price,
                
        })
        product.save()
        .then(product=>{
            res.json({message:"Saved Successfully"})
        }).catch(err=>{
            console.log(err);
        })
      
};

//Get  Usr by id
const getProduct =  async(req, res) => {
    
    try{
        const product = await Product.findById(req.params.postid);
        res.json(product);
    }catch(err){
        res.json({message:err});
    }
      
}
//Delete  Usr by id
const delProduct = async(req, res) => {
    
    try{
        const product = await Product.remove(req.params.postid);
        res.json(product);
    }catch(err){
        res.json({message:err});
    }
      
};
//update  Usr by id
const updateProduct = async(req, res) => {
    
    try{
        const product = await Product.updateOne(
            {_id: req.params.postid},
            {$set: {name :req.body.name}}
            );
        res.json(product);
    }catch(err){
        res.json({message:err});
    }
      
};

module.exports = {
    getAllProduct,
    addProduct,
    updateProduct,
    delProduct,
    getProduct
}