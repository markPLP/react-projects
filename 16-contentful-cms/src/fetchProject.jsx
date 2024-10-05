import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'us6r6oy788vz',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response.items));

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      // destructure from response.items
      const projectsItems = response.items.map((item) => {
        const { image, title, url } = item.fields;
        const { id } = item.sys;
        const img = image?.fields?.file?.url;

        return { id, title, url, img };
      });

      setProjects(projectsItems);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, loading };
};
