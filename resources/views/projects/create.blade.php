@extends('layouts.app')

@section('title','Création')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="float-left">
                <h1>Création d'un projet</h1>
            </div>
            <div class="float-right">
                <a class="btn btn-primary" href="{{ route('projects.index') }}" title="Retour">
                    <i class="fas fa-backward "></i>
                </a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    @include('projects.forms.project_form')

@endsection
