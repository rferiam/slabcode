<template>
  <div id="sidebar">
    <div class="logo">
      <img alt="logo" src="@/assets/logo.svg" />
    </div>
    <div class="menu">
      <h1>Configuraciones disponibles</h1>
      <router-link to="/render/2-UDLR-XT">2-UDLR-XT</router-link>
      <router-link to="/render/2-UXL-L">2-UXL-L</router-link>
      <router-link to="/render/2-T-T">2-T-T</router-link>
      <router-link to="/render/3-L-DT-DT">3-L-DT-DT</router-link>
      <router-link to="/render/3-XL-DT-DT">3-XL-DT-DT</router-link>
      <router-link to="/render/4-L-L-L-L">4-L-L-L-L</router-link>
      <router-link to="/render/4-DL-DL-DL-DL">4-DL-DL-DL-DL</router-link>
      <router-link to="/render/6-DLR-DLR-DT-DT-DLR-DLR"
        >6-DLR-DLR-DT-DT-DLR-DLR</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
#sidebar {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .logo {
    margin-bottom: 3rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      color: darken(#2c3e50, 5%);
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    a {
      margin: 5px 0;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active,
      &:hover {
        color: #42b983;
      }
    }
  }
}
</style>
