<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      {{-- <a href="{{ route('adminDashboard') }}" class="nav-link">{{ __('Home') }}</a> --}}
    </li>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <li class="nav-item dropdown ml-auto">
      <a class="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-expanded="false">
        {{ __('Welcome') }}, test
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="">
              {{ __('Profile') }}
          </a>
      </li>
      </ul>
    </li>
    <li class="nav-item">
      <form action="" method="post">
          @csrf
          <button type="submit" class="nav-link btn btn-primary" style="border: none; background: none; cursor: pointer;">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              {{ __('Logout') }}
          </button>
      </form>
    </li>
  </ul>
</nav>
<!-- /.navbar -->