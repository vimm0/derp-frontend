<template>
    <div id="app">
        <!--<navbar></navbar>-->
        <!--<div class="container">-->
        <!--<div class="columns">-->
        <!--<div class="column is-3 ">-->
        <!--<sidebar></sidebar>-->
        <!--</div>-->
        <!--<div class="column is-9">-->
        <router-view :key="$route.fullPath"></router-view>
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<foot></foot>-->
    </div>
</template>

<script>
    // import Navbar from './components/Navbar.vue'
    // import Sidebar from './components/Sidebar.vue'
    // import Footer from './components/Footer.vue'
    import Vue from 'vue'
    import axios from 'axios'

    export default {
        name: 'app',
        components: {
            // Navbar,
            // Sidebar,
            // 'foot': Footer
        },
        created() {
            axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.baseURL = "http://localhost:8000/api/v1/"
            global.axios = axios
            global.Vue = Vue
        }
    }
</script>

<style>
    html, body {
        font-family: 'Open Sans', serif;
        font-size: 16px;
        line-height: 1.5;
        height: 100%;
        background: #ECF0F3;
    }

    nav.navbar {
        border-top: 4px solid #276cda;
        margin-bottom: 1rem;
    }

    .navbar-item.brand-text {
        font-weight: 300;
    }

    .navbar-item, .navbar-link {
        font-size: 14px;
        font-weight: 700;
    }

    .columns {
        width: 100%;
        height: 100%;
        margin-left: 0;
    }

    .menu-label {
        color: #8F99A3;
        letter-spacing: 1.3;
        font-weight: 700;
    }

    .menu-list a {
        color: #0F1D38;
        font-size: 14px;
        font-weight: 700;
    }

    .menu-list a:hover {
        background-color: transparent;
        color: #276cda;
    }

    .menu-list a.is-active {
        background-color: transparent;
        color: #276cda;
        font-weight: 700;
    }

    .card {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        margin-bottom: 2rem;
    }

    .card-header-title {
        color: #8F99A3;
        font-weight: 400;
    }

    .info-tiles {
        margin: 1rem 0;
    }

    .info-tiles .subtitle {
        font-weight: 300;
        color: #8F99A3;
    }

    .hero.welcome.is-info {
        background: #36D1DC;
        background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
        background: linear-gradient(to right, #5B86E5, #36D1DC);
    }

    .hero.welcome .title, .hero.welcome .subtitle {
        color: hsl(192, 17%, 99%);
    }

    .card .content {
        font-size: 14px;
    }

    .card-footer-item {
        font-size: 14px;
        font-weight: 700;
        color: #8F99A3;
    }

    .card-footer-item:hover {
    }

    .card-table .table {
        margin-bottom: 0;
    }

    .events-card .card-table {
        max-height: 250px;
        overflow-y: scroll;
    }

    .dropdown-toggle::after {
        display: none !important;
    }

</style>
