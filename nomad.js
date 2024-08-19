// tab title
const title = document.querySelector('title')
title.style.textTransform = 'uppercase'
// root div of the app
const nomad = document.getElementById('nomad')
import { navbar } from 'home.js'
import { mainsection } from './home'
nomad.appendChild(navbar)
nomad.appendChild(mainsection)