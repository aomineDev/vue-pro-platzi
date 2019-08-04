<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-wrapper">
        <nuxt-link to="/" class="nav-branch">Platzi Music</nuxt-link>
        <ul class="nav-content">
          <li class="nav-item">
            <nuxt-link to="/search" class="nav-link">Search</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="about" class="nav-link">About</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #448AFF;
  box-shadow: 0 0 12px 4px rgba(51, 51, 51, .5);
}
.nav {
  &-wrapper {
    height: 60px;
    padding-left: 48px;
    padding-right: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-branch,
  &-link {
    color: #fff;
    font-family: 'Quicksand';
    text-decoration: none;
  }
  &-branch {
    font-size: 32px;
    font-weight: 600;
  }
  &-content {
    list-style: none;
    display: flex;
    padding-left: 0;
  }
  &-link {
    display: block;
    padding-right: 32px;
    font-weight: 500;
  }
  &-item:last-child {
    .nav-link {
      padding-right: 0;
    }
  }
}
</style>
