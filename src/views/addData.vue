<template>
    <div id="app">
        <b-container>
            <div class="header">
                <div class="header-text">
                    <p>Add Items</p>
                </div>
            </div>
        </b-container>
        <b-container>
            <div class="left-bar" id="left-bar">
                <ul>
                    <li>
                        <router-link to="/home"><img class="icon" src="../assets/images/fork.png" alt=""></router-link>
                    </li>
                    <li>
                        <router-link to="/history"><img class="icon" src="../assets/images/clipboard.png" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/add"><img class="icon" src="../assets/images/add.png" alt=""></router-link>
                    </li>
                </ul>
            </div>
        </b-container>
        <b-container>
            <div class="content">
                <table class="table">
                    <b-button v-b-modal="'modal-add'" variant="success">Add</b-button>
                    <b-modal id="modal-add">
                        <div class="form">
                            <b-form @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                                    <b-form-input id="input-1" v-model="name" type="text" required
                                        placeholder="Enter name"></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="description" type="text" required
                                        placeholder="Enter description"></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-3" label="Price:" label-for="input-3">
                                    <b-form-input id="input-3" v-model="price" type="text" required
                                        placeholder="Enter price"></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-4" label="Image:" label-for="input-4">
                                    <b-form-file id="image" ref="image" type="file" required placeholder="">
                                    </b-form-file>
                                </b-form-group>

                                <b-form-group id="input-group-5" label="Category:" label-for="input-5">
                                    <b-form-select v-model="idfood" :options="options" size="sm" class="mt-3">
                                    </b-form-select>
                                    <div class="mt-3">Selected: <strong>{{ idfood }}</strong></div>
                                </b-form-group>

                                <b-button type="button" @click="saveProd()" variant="primary" size="sm">Submit
                                </b-button>
                                <b-button type="reset" variant="danger" size="sm">Reset</b-button>
                            </b-form>
                        </div>
                    </b-modal>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Opsi</th>
                    </tr>
                    <tr v-for="datas in items" :key="datas.id">
                        <td>{{datas.name}}</td>
                        <td>{{datas.description}}</td>
                        <td>{{datas.price}}</td>
                        <td>{{datas.image}}</td>
                        <td>
                            <b-button variant="primary" size="sm" @click="setValue(datas)" v-b-modal="'modal-edit'">
                                Update</b-button> |
                            <b-button variant="danger" size="sm" @click="deleteProd(datas.id)">Delete</b-button>
                        </td>
                    </tr>
                </table>
                <b-modal id="modal-edit">
                    <div class="form">
                        <b-form @reset="onReset" v-if="show">
                            <b-form-input id="input-1" v-model="id" type="text" placeholder="Enter name">
                            </b-form-input>
                            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                                <b-form-input id="input-1" v-model="name" type="text" required placeholder="Enter name">
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                                <b-form-input id="input-2" v-model="description" type="text" required
                                    placeholder="Enter description"></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-3" label="Price:" label-for="input-3">
                                <b-form-input id="input-3" v-model="price" type="text" required
                                    placeholder="Enter price"></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-4" label="Image:" label-for="input-4">
                                <b-form-file id="image" ref="imageUpdate" type="file" required placeholder=""></b-form-file>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Category:" label-for="input-5">
                                <b-form-select v-model="idfood" :options="options" size="sm" class="mt-3">
                                </b-form-select>
                                <div class="mt-3">Selected: <strong>{{ idfood }}</strong></div>
                            </b-form-group>

                            <b-button type="button" @click="updateProd()" variant="primary" size="sm">Submit</b-button>
                            <b-button type="reset" variant="danger" size="sm">Reset</b-button>
                        </b-form>
                    </div>
                </b-modal>
            </div>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "add",
        data() {
            return {
                items: [],
                id: 0,
                name: '',
                description: '',
                price: 0,
                idfood: 0,
                show: true,
                selected: null,
                options: [{
                        value: null,
                        text: 'Please select an option'
                    },
                    {
                        value: '1',
                        text: 'Makanan'
                    },
                    {
                        value: '2',
                        text: 'Minuman'
                    },
                ]
            }
        },
        methods: {
            saveProd() {
                if (this.name <= 0) {
                    return alert("Nama Harus disi")
                }
                if (this.description <= 0) {
                    return alert("Deskripsi Harus disi")
                }
                if (this.image <= 0) {
                    return alert("Image Harus disi")
                }
                if (this.price <= 0) {
                    return alert("Price Harus disi")
                }
                if (this.idfood <= 0) {
                    return alert("Kategori Harus disi")
                }

                const postData = new FormData()
                postData.append('name', this.name)
                postData.append('description', this.description)
                postData.append('price', this.price)
                postData.append('image', this.$refs.image.files[0])
                postData.append('idcategory', this.idfood)

                axios({
                        method: "post",
                        url: "http://localhost:8081/product",
                        headers: {
                            "Content-type": "multipart/form-data",
                            "authtoken": localStorage.getItem('token')
                        },
                        data: postData
                    })
                    .then(res => {
                        console.log(res.data)
                        alert('Data Berhasil Di tambahkan')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            updateProd(){
                const postData = new FormData()
                postData.append('id', this.id)
                postData.append('name', this.name)
                postData.append('description', this.description)
                postData.append('price', this.price)
                postData.append('image', this.$refs.imageUpdate.files[0])
                postData.append('idcategory', this.idfood)

                axios({
                        method: "put",
                        url: "http://localhost:8081/product",
                        headers: {
                            "Content-type": "multipart/form-data",
                            "authtoken": localStorage.getItem('token')
                        },
                        data: postData
                    })
                    .then(res => {
                        console.log(res.data)
                        alert('Data Berhasil Di update')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            deleteProd(id) {
                axios({
                        method: "delete",
                        url: `http://localhost:8081/product/${id}`,
                        headers: {
                            "Content-type": "application/json",
                            "authtoken": localStorage.getItem('token')
                        }
                    })
                    .then(res => {
                        this.items.splice(this.items.indexOf(id), 1)
                        console.log(res)
                        alert('Data Berhasil Di Hapus')
                    })
            },

            onReset(evt) {
                evt.preventDefault()
                this.name = ''
                this.description = ''
                this.price = ''
                this.image = ''
                this.price = ''
                this.category = ''

                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },

            setValue(value) {
                this.id = value.id
                this.name = value.name
                this.description = value.description
                this.price = value.price
                this.idfood = value.idfood
            }
        },
        mounted() {
            axios
                .get(process.env.VUE_APP_URL + "product", {
                    headers: {
                        'authtoken': localStorage.getItem('token')
                    }
                })
                .then(response => {
                    this.items = response.data.result
                })
                .catch(err => {
                    this.items = err
                })
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
        background: rgba(190, 195, 202, 0.3);
    }

    .table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        margin: 3rem 1.5rem;
        width: 90%;
        font-size: 0px;
        font-size: 15px;
    }

    .table td,
    .table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .table tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .table tr:hover {
        background-color: #ddd;
    }

    .table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }

    .cart {
        position: fixed;
        width: 491px;
        height: 96px;
        left: 999px;
        top: 0px;

        background: #FFFFFF;
        box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
    }

    .cart-text {
        margin: 2em 0em 0em 7.5em;
        font-size: larger;
        font-weight: bold;

    }

    .cart-content {
        position: fixed;
        width: 490px;
        height: 800px;
        left: 1002px;
        top: 100px;

        background: #FFFFFF;
        border: 1px solid #CECECE;
    }

    .cart-content-icon {
        position: absolute;
        width: 200px;
        height: 200px;
        left: 75px;
        top: 100px;
    }

    .cart-content-text {
        position: absolute;
        width: 371px;
        height: 60px;
        left: -30px;
        top: 165px;

        font-size: 30px;
        line-height: 39px;

        color: #000000;
    }

    .cart-content-text-sub {
        position: absolute;
        width: 371px;
        height: 60px;
        left: -52px;
        top: 195px;

        font-size: 16px;
        line-height: 39px;
        color: #CECECE;
    }
</style>