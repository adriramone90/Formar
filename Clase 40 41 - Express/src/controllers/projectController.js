
const express = require("express");

const {getProject} = require("../data/index")

module.exports = {
    getAllProject: (req,res)=>{
        res.set({"content-type":"text/plain;charset=utf-8"})

        getProject.forEach(element => {
            res.write(`Este es el ${element.name}\n`)
        })
        res.end()
    },

    getOneProject: (req,res) =>{
        res.set({"content-type":"text/plain;charset=utf-8"})

        let projectId = +req.params.id;

        let project = getProject.find((element)=>element.id === projectId)

        res.write(`Yo soy el ${project.name}`)
        res.end()
    }

    
}