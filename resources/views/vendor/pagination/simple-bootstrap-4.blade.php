@if ($paginator->hasPages())
    <nav role="navigation">
        <ul class="pagination">
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="page-item disabled" aria-disabled="true">
                    <a class="page-link">@lang('pagination.previous')</a>
                </li>
            @else
                <li class="page-item" aria-disabled="false">
                    <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev">@lang('pagination.previous')</a>
                </li>
            @endif

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li class="page-item" aria-disabled="false">
                    <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next">@lang('pagination.next')</a>
                </li>
            @else
                <li class="page-item disabled" aria-disabled="true">
                    <a class="page-link">@lang('pagination.next')</a>
                </li>
            @endif
        </ul>
    </nav>
@endif
