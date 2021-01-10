<template>
    <div>
        <b-row>
            <b-col cols="12">
                    <div class="cart-txt">{{name}}</div>
                    <div class="cart-price">{{price * jumlah}}</div>
                    <div class="btn-group">
                        <div class="quantity">
                            <button class="btn-cart" @click="plus" type="button" name="button">
                                +
                            </button>
                            <input type="text" name="name" :value="jumlah">
                            <button class="btn-cart" @click="less" type="button" name="button">
                                -
                            </button>
                        </div>
                    </div>
                    <div><img class="cart-img" :src="image" alt="" srcset=""></div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
    name: "cart",
    data(){
        return {
            jumlah : 1,
        }
    },
    props: {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        },
        methods: {
            qty(){
                this.$emit('qty', this.jumlah)
            },
            plus() {
                let x = this.jumlah++
                x * this.price
            },
            less(){
                if (this.jumlah === 1){
                    alert('tidak boleh kurang dari 1')
                } else {
                    this.jumlah--
                }
            }
        }
    }
</script>

<style scoped>
.add-to-cart {
    display: flex;
    flex-direction: column;
    margin: 15px 0px 25px 15px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.cart-img {
    width: 100px;
    height: 100px;
}

.cart-txt {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    margin: auto 7rem;
}

.cart-price {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    margin: 4.5rem 24rem;
}

.btn-group {
    position: absolute;
    margin: 4rem 7rem;
}

.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}
 
.btn-cart {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.cart-bottom {
    position: fixed;
}

.txt-1 {
    position: fixed;
    font-size: auto;
    font-weight: bold;
    margin: 18rem 1rem;
}
</style>