# Copyright (C) 2021 Ibrahem Mouhamad

import sys
from rest_framework.pagination import PageNumberPagination

class CustomPagination(PageNumberPagination):
    page_size_query_param = "page_size"

    def get_page_size(self, request):
        page_size = 0
        page_size1=1
        try:
            value = request.query_params[self.page_size_query_param]
            if value == "all":
                page_size = sys.maxsize
            else:
                page_size = int(value)
        except (KeyError, ValueError):
            pass

        return page_size if page_size > 0 else self.page_size