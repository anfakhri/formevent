<!-- Sidebar Menu -->
<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
        with font-awesome or any other icon font library -->
        {{-- Dashboard --}}
        <li class="nav-item">
            <a href="/admin/dashboard" class="nav-link {{ request()->segment(2) == 'dashboard' ? 'active' : '' }}">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                    {{ __('Dashboard') }}
                </p>
            </a>
        </li>
        {{-- /Dashboard --}}

        {{-- Student Data --}}
        <li class="nav-item {{ request()->segment(2) == 'students' ? 'menu-open' : '' }}">
            <a href="#" class="nav-link {{ request()->segment(2) == 'students' ? 'active' : '' }}">
                <i class="nav-icon fas fa-book"></i>
                <p>
                    {{ __('Data Master') }}
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href=""
                        class="nav-link {{ request()->segment(3) == 'registration-status' ? 'active' : '' }}">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Registration Data') }}</p>
                    </a>
                </li>
            </ul>
        </li>
        {{-- /Student Data --}}

    </ul>
</nav>
