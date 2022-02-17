import AuthLogo from "./extensions/logo.png";
import MenuLogo from "./extensions/logo_menu.png";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Disable video tutorials
    tutorials: false,
    notifications: { release: false },
  },

  bootstrap() {},
};
