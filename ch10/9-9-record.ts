{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";
  const nav: Record<Page, PageInfo> = {
    // Record<key, value>
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
