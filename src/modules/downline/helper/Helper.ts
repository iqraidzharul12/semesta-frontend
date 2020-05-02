export const getPager = (totalItems: number, currentPageData: number, pageSizeData: number) => {
    try {
      const currentPage = currentPageData || 1;
      const pageSize = pageSizeData || 5;
  
      const totalPages = Math.ceil(totalItems / pageSize);
      
      let startPage: number;
      let endPage: number;
  
      if (totalPages <= 5) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= 3) {
          startPage = 1;
          endPage = 5;
        } else if (currentPage + 3 >= totalPages) {
          startPage = totalPages - 4;
          endPage = totalPages;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }
  
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
      const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

      return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages,
      };
    } catch (e) {
      console.log('error at getPager: ', e);
    }
  }