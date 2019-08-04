const blur = {}

function setBlur(el, binding){
  el.style.filter = !binding.value ? 'blur(1px)' : 'none'
  // el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('.btn-flat').forEach(a => {
    if(!binding.value){
      a.classList.add('disabled')
    }else {
      a.classList.remove('disabled')
    }
  })

  el.querySelectorAll('.blue-text').forEach(a => {
    if(!binding.value){
      a.classList.replace('blue-text', 'grey-text')
    }else {
      a.classList.replace('grey-text', 'blue-text')
    }
  })
}

blur.install = function(Vue){
  Vue.directive('blur', {
    bind(el, binding){
      setBlur(el, binding)  
    }
  })
}

export default blur