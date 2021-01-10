<template>
    <div id="app">
        <b-container>
            <div class="header">
                <div class="header-text">
                    <p>Food Items</p>
                </div>
            </div>
        </b-container>
        <b-container>
            <div class="left-bar" id="left-bar">
                <ul>
                    <li><router-link to="/home"><img class="icon" src="../assets/images/fork.png" alt=""></router-link></li>
                    <li><router-link to="/history"><img class="icon" src="../assets/images/clipboard.png" alt=""></router-link></li>
                    <li><router-link to="/add"><img class="icon" src="../assets/images/add.png" alt=""></router-link></li>
                </ul>
            </div>
        </b-container>
        <b-container>
            <div class="content">
                <b-row>
                    <b-col>
                        <div class="card-1">
                            <div class="ellipse1"></div>
                            <div class="ellipse2"></div>
                            <div class="ellipse3"></div>
                            <div class="text1">
                                <p><strong>Today's Income</strong></p>
                                <p><strong>Rp. 1.000.000</strong></p>
                                <p><strong>+2% Yesterday</strong></p>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="card-2">
                            <div class="ellipse1"></div>
                            <div class="ellipse2"></div>
                            <div class="ellipse3"></div>
                             <div class="text1">
                                <p><strong>Orders</strong></p>
                                <p><strong>150</strong></p>
                                <p><strong>+2% Yesterday</strong></p>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="card-3">
                            <div class="ellipse1"></div>
                            <div class="ellipse2"></div>
                            <div class="ellipse3"></div>
                             <div class="text1">
                                <p><strong>This Years Income</strong></p>
                                <p><strong>Rp. 10.000.000</strong></p>
                                <p><strong>+2% Yesterday</strong></p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="graph">
                            <img class="ss" src="../assets/ss.png" alt="">
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="box">
                            <b-table striped hover :items="items"></b-table>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "history",
    data() {
        return {
            items: []
        }
    },
    async mounted() {
     await axios
            .get(process.env.VUE_APP_URL + 'history', {
                headers: {
                    'authtoken': localStorage.getItem('token')
                }
            })
            .then(response => 
                {
                   this.items = response.data.result
                }
            )
            .catch(err => {this.items = err})

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header {
    position: fixed;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 0px;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(90, 50, 50, 0.25);
    z-index: 10;

}

.header-icon {
    position: absolute;
    width: 35.35px;
    height: 35px;
    left: 31.31px;
    top: 34px;
}

.header-text {
    margin: 2.5em 0em 0em 44em;
}

.header-text p {
    font-size: larger;
    font-weight: bold;
}

.header-search-icon {
    position: absolute;
    width: 35.35px;
    height: 35px;
    left: 916.14px;
    top: 34px;
}

.left-bar {
    position: fixed;
    width: 109px;
    height: 800px;
    left: 0px;
    top: 106px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

li {
    list-style: none;
}

.icon {
    display: flex;
    flex-direction: column;
    width: 35px;
    height: 35px;
    margin: 45px -5px 45px;
}

.content {
    position: absolute;
    width: 100%;
    height: auto;
    left: 109px;
    top: 100px;
    background-color: #E5E5E5;
}

.ss {
    width: 1283px;
    height: 245px;
}

.card-1 {
    position: absolute;
    width: 300px;
    height: 165px;
    left: 85px;
    top: 45px;

    background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    border-radius: 10px;
}

.card-2 {
    position: absolute;
    width: 300px;
    height: 165px;
    left: 60px;
    top: 45px;

    background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
    border-radius: 10px;
}

.card-3 {
    position: absolute;
    width: 300px;
    height: 165px;
    left: 38px;
    top: 45px;

    background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
    border-radius: 10px;
}

.graph {
    position: absolute;
    width: 1285px;
    height: 250px;
    left: 85px;
    top: 257px;

    background: #FFFFFF;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.box {
    position: absolute;
    width: 1285px;
    height: auto;
    left: 86px;
    top: 560px;

    background: #FFFFFF;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.form {
    width: 853px;
    height: auto;
    background-color:#ffffff;
    margin: 20px 185px;
    padding: 30px 80px;
}

.text1 {
    margin: 30px 40px;
}

.ellipse1 {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 196px;
    top: 4px;
    border-radius: 100%;

    background: rgba(253, 211, 228, 0.3);
}

.ellipse2 {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 177px;
    top: 28px;
    border-radius: 100%;

    background: rgba(253, 211, 228, 0.3);
}

.ellipse3 {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 145px;
    top: 63px;
    border-radius: 100%;

    background: rgba(253, 211, 228, 0.3);
}
</style>