import {useState, useEffect, useCallback} from 'react';
import {len_query} from '../../utils/consts';
export const useQueryListReducer = (request: Function) => {
  const [loading, setLoading] = useState(false);
  const [list, setList]: any = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchNewItems = useCallback(
    async (offset: number) => {
      const newChapters: any = await request({limit: len_query, offset});
      if (newChapters) {
        setList((chapters: any[]) => [...chapters, ...newChapters]);
      }
      setLoading(false);
    },
    [request]
  );
  useEffect(() => {
    setLoading(true);
    fetchNewItems(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  return {
    loading,
    list,
    setOffset,
  };
};
