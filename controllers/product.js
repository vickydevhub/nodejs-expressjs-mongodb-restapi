import express from 'express';
import Product from '../models/Product.js';

export const getAllProduct = async (req, res, next) => {
    try {
        const allProduct = await Product.find();
        res.json(allProduct);
    } catch (error) {
        res.json({ message: error });
    }
};

export const addProduct = async (req, res, next) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(422).json({ error: "Please add all fields" });
    }

    const product = new Product({
        name,
        price,
    });

    product.save()
        .then(product => {
            res.json({ message: "Saved Successfully" });
        })
        .catch(err => {
            console.log(err);
        });
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.postid);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
};

export const delProduct = async (req, res) => {
    try {
        const product = await Product.remove(req.params.postid);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.updateOne(
            { _id: req.params.postid },
            { $set: { name: req.body.name } }
        );
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
};
