<template>
    <header>
        <div class="container">
            <div class="row">
                
            </div>
        </div>
    </header>



    <header class="">
        <div class="header-topbar  d-flex justify-sb align-items">
            <div class="d-flex">
                <p class="mr-16"><i class="fa-regular fa-envelope"></i> contact@example.com</p>
                <p><i class="fa-solid fa-phone"></i> (+84) 888 8888 8888</p>
            </div>
            <div class="d-flex align-items">
                <div>
                    <i class="fa-solid fa-right-to-bracket mr-6"></i>
                    <a href="">Sign up</a>
                </div>
                <a class="ml-16" href="">Login</a>
                <div class="d-flex align-items ml-16 top-cart-wishlist">
                    <a href="" class="top-cart__count-wishlist d-flex align-items"><i
                            class="fa-regular fa-heart"></i><span>0</span></a>
                    <a href="" class="ml-16 d-flex align-items top-cart__count-wishlist"><i
                            class="fa-solid fa-cart-shopping"></i><span>1</span>
                        <p class="ml-8">Cart: $<b>0.00</b></p>
                    </a>
                </div>
            </div>
        </div>

        <div class="header-main  d-flex justify-sb align-items">
            <div>
                <a href="">
                    <img src="https://wpbakery-10aba.kxcdn.com/cena/wp-content/themes/cena/images/logo.png" alt="">
                </a>
            </div>
            <div class="w-50 d-flex header-search">
                <input type="text" class="w-80" placeholder="Enter your search ...">
                <button class="w-20">Search
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div class="top-ship d-flex align-items">
                <img src="" alt="">
                <div class="ml-8">
                    <h3>-- FREE DELIVERY --</h3>
                    <p>For all orders over <b>$300</b></p>
                </div>
            </div>
        </div>

        <div class="d-flex  justify-sb align-items header-main-menu">
            <div class="d-flex category-inside">
                <div class="mr-16 category-inside-title">
                    <i class="fa-solid fa-bars mr-8"></i>
                    All Categories
                </div>
                <ul class="d-flex category-inside-menu">
                    <li class="mr-4 category-inside-menu__active">
                        <a href="">
                            Home
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                    <li class="mr-4">
                        <a href="">Shop
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                    <li class="mr-4">
                        <a href="">Blog
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                    <li class="mr-4">
                        <a href="">Pages
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                    <li class="mr-4">
                        <a href="">Best Selling
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p><b>New Offer: Sale up to 50%</b> on Phone Accessories</p>
        </div>
    </header>
</template>

<script>
export default {
    name: "TheMenu",
}
</script>

<!-- <style scoped>
.header-topbar {
    width: 100%;
    min-height: 40px;
    background: #2b87c3;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: normal;
    border-bottom: 1px solid #f5f5f5;
}

.header-topbar p,
.header-topbar i,
.header-topbar a {
    font-size: 1.3rem;
}

.top-cart-wishlist {
    border-radius: 4px;
    background-color: #0b6baa;
    padding: 6px 25px 2px;
    font-weight: 400;
    min-height: 30px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 1.4rem;
}

.top-cart-wishlist p {
    font-size: 1.4rem;
}

.top-cart-wishlist i {
    font-size: 1.6rem;
}

.top-cart-wishlist a {
    min-height: 30px;
}

.top-cart__count-wishlist {
    position: relative;
}

.top-cart__count-wishlist span {
    position: absolute;
    top: -2px;
    left: -10px;
    background: #009aff;
    min-width: 16px;
    line-height: 16px;
    border-radius: 50%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
}

.header-main {
    padding-top: 30px;
    padding-bottom: 18px;
}

.header-search {
    min-height: 40px;
    background-color: #fff;
    border: solid 2px #eee;
    border-radius: 8px;
}

.header-search input {
    min-height: 40px;
    outline: none;
    border: 0;
    padding: 4px 20px;
    background-color: #fff;
}

.header-search button {
    border: 0;
    cursor: pointer;
    font-size: 1.3rem;
    background-color: #009aff;
    color: #fff;
    letter-spacing: 1.5px;
    border-radius: 0 8px 8px 0 !important;
}

.top-ship h3 {
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #2b87c3;
}

.top-ship p {
    color: #999;
}

.top-ship b {
    color: #000;
}

.category-inside-title {
    line-height: 47px;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0 5px 0 20px;
    color: #fff;
    width: 270px;
    background: #009aff;
    border-radius: 8px 8px 0 0;
    position: relative;
    margin-right: 15px;
    margin-left: 0;
}

.category-inside-menu li {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 15px 13px 16px;
    color: #333;
    position: relative;
    border-radius: 8px 8px 0 0;
}

.category-inside-menu li:hover {
    background-color: #00f2bc;
    color: #fff !important;
}

.category-inside-menu__active {
    background-color: #00f2bc;
    color: #fff !important;
}
</style> -->