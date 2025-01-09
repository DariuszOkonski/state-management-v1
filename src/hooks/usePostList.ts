import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostList = () => {
  const fetchPostList = () =>
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ['postList'],
    queryFn: fetchPostList,
    staleTime: 5 * 1000,
  });
};

export default usePostList;
