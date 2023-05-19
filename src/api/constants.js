import React from "react";

import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { MdLocalFireDepartment,MdDeveloperMode} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import {RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import {TbBook2} from 'react-icons/tb'
import {BiNews} from 'react-icons/bi'

export const categories = [
    { name: "uy",clicked:true, icon: <AiFillHome className="logos"/>, type: "home" },
    { name: "Musiqalar",clicked:true, icon: <CgMusicNote className="logos"/>, type: "category" },
    { name: "Trendlar",clicked:true, icon: <MdLocalFireDepartment className="logos"/>, type: "category" },
    { name: "Kinolar",clicked:true, icon: <FiFilm className="logos"/>, type: "category" },
    { name: "Dasturlash",clicked:true, icon: <MdDeveloperMode className="logos"/>, type: "category" },
    { name: "najot talim",clicked:true, icon: <TbBook2 className="logos"/>, type: "category" },
    { name: "yangiliklar",clicked:true,divider:true, icon: <BiNews className="logos"/>, type: "category" },
    { name: "Sozlamalar", icon: <FiSettings className="logos"/>, type: "menu" },
    { name: "Yordam", icon: <FiHelpCircle className="logos"/>, type: "menu" },
    { name: "Fikr bildirish", icon: <RiFeedbackLine className="logos"/>, type: "menu" },    
];
