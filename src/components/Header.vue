<template>
  <div style="background-color: white; margin-top: 30px; display: flex">
    <header>
      <h1 style="display: inline-block; font-size: 20px">Jumia</h1>
      <div id="sectionA">
        <ion-icon
          style="padding: 4px; font-size: 12px"
          name="search-outline"
        ></ion-icon>
        <input id="search-box" type="text" placeholder="Search for anything" />
      </div>
      <button id="search-button">SEARCH</button>

      <div style="display: inline-flex">
        <div class="nav">
          <ion-icon class="nav-icon" name="person-outline"></ion-icon>Profile
        </div>
        <div class="nav">
          <ion-icon class="nav-icon" name="help-circle-outline"></ion-icon>Help
        </div>
        <div class="nav">
          <ion-icon class="nav-icon" name="cart-outline"></ion-icon>Cart
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      myHeading: "This is some awesome staff!!!",
    };
  },
};
</script>

<style scoped>
body {
  background-color: #f1f1f1;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}

header {
  background-color: white;
  padding: 12px;
  display: flex;
  align-items: center;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
}

#sectionA {
  margin-left: 40px;
  border: 1px solid #f1f1f1;
  display: inline-flex;
  align-items: center;
}

#search-box {
  padding: 4px;
  width: 240px;
  border: 0px;
}
#search-button {
  color: white;
  background-color: #f68b1e;
  padding: 6px 12px;
  border: 0px;
  border-radius: 3px;
  box-shadow: 1px 2px 5px #a09f9f96;
}

.nav {
  margin-left: 16px;
  display: inline-flex;
}

.nav-icon {
  margin-right: 6px;
}
</style>
