// import Papa from "papaparse";

const api = {
  links: {
    fetch: async (url: string) => {
      const res = await fetch(url);
      const data = await res.text();
      // const parsed = await new Promise<Link[]>((resolve, reject) => {
      //   Papa.parse<Link>(data, {
      //     header: true,
      //     // dynamicTyping: true,
      //     complete: (result) => resolve(result.data),
      //     error: reject,
      //   });
      // });

      const parsed = data
        .split("\n")
        .slice(1)
        .map((row) => {
          const [label, url] = row.split(",");
          return {
            label,
            url,
          };
        });

      return parsed;
    },
  },
  user: {
    list: async () => {
      const res = await fetch(process.env.FIELDS_CSV!);
      const data = await res.text();
      // const parsed = await new Promise<User[]>((resolve, reject) => {
      //   Papa.parse<User>(data, {
      //     header: true,
      //     // dynamicTyping: true,
      //     complete: (result) => resolve(result.data),
      //     error: reject
      //   })
      // })

      const parsed = data
        .split("\n")
        .slice(1)
        .map((row) => {
          const [slug, url] = row.split(",");
          return {
            slug,
            url,
          };
        });

      return parsed;
    },
  },
};

export default api;
