@extends('admin.layouts.app')

@section('slot')
<!-- Small boxes (Stat box) -->
<div class="row">
  <div class="col-lg-3 col-6">
    <!-- small box -->
    <div class="small-box bg-info">
      <div class="inner">
        <h3><sup style="font-size: 15px"> Person</sup></h3>

        <p>Registration Stundent</p>
      </div>
      <div class="icon">
        <i class="fa fa-users" aria-hidden="true"></i>
      </div>
      <a href="" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->
  <div class="col-lg-3 col-6">
    <!-- small box -->
    <div class="small-box bg-success">
      <div class="inner">
        <h3><sup style="font-size: 15px"> Person</sup></h3>

        <p>Registration Fee Paid</p>
      </div>
      <div class="icon">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
      </div>
      <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->
  <div class="col-lg-3 col-6">
    <!-- small box -->
    <div class="small-box bg-warning">
      <div class="inner">
        <h3><sup style="font-size: 15px"> Person</sup></h3>

        <p>Registration Fee Unpaid</p>
      </div>
      <div class="icon">
        <i class="fa fa-pause-circle aria-hidden="true"></i>
      </div>
      <a href="" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->
  <div class="col-lg-3 col-6">
    <!-- small box -->
    <div class="small-box bg-danger">
      <div class="inner">
        <h3><sup style="font-size: 15px"> Person</sup></h3>

        <p>Registrant Fee Expired</p>
      </div>
      <div class="icon">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </div>
      <a href="" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->
</div>
<!-- /.row -->
@endsection