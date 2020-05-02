export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Management',
      wrapper: { // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '', // optional class names space delimited list for title item ex: "text-center"
    },
    // {
    //   name: 'User',
    //   url: '/user',
    //   icon: 'icon-user',
    // },
    {
      name: 'Map',
      url: '/map',
      icon: 'icon-user',
    },
    // {
    //   name: 'Product',
    //   url: '/product',
    //   icon: 'icon-trash',
    // },
    // {
    //   name: 'Order',
    //   url: '/order',
    //   icon: 'icon-pencil',
    // },
  ],
};
