function applyStyle(element, binding){
    /*
    // This was for the arg,modifiers passing way
      console.log('arg:', binding.arg);
      console.log('modifiers:', binding.modifiers)
      if (binding.arg != position) return;
      Object.keys(binding.modifiers).forEach(key => {
        element.style[key] = '5px';
      })
    */
  Object.keys(binding.value).forEach(value => {
    element.style[value] = binding.value[value];
  })
  element.style.position = 'absolute';
}

export default {
  // This hook is called only when the directive is bound to the component
  bind: (element, binding) => {
   applyStyle(element,binding);
  },
  // Must add this for calling when the component updates
  update: (element, binding) => {
    applyStyle(element,binding);
  },
  // Fires when the bound element gets inserted into its parent node
  inserted: () => {
    console.log('inserted')
  },
  // Similair to updated, but only fires after all children components are updated
  componentUpdated: () => {
    console.log('componentUpdated')
  },
  // called when the directive is un-bound from its element
  unbind: () => {
    console.log('unbind')
  }
};

/*
This is a super duper awesome shorthand for adding a directive with the bind, and update lifecycle hooks specifically
notice it's a function and not an object


export default function (element, binding) {
  Object.keys(binding.value).forEach(value => {
    element.style[value] = binding.value[value];
  })
  element.style.position = 'absolute';
}
*/
