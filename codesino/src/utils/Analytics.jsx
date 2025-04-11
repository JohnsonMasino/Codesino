export const loadGoogleAnalytics = () => {
    if (!window.gtag) {
      const script1 = document.createElement('script');
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-MPQ5J3MY63';
      script1.async = true;
      document.head.appendChild(script1);
  
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MPQ5J3MY63');
      `;
      document.head.appendChild(script2);
    }
  };
  