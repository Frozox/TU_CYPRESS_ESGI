@extends('layouts.app')

@section('title',$project->name)

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="float-left">
                <h2> {{ $project->name }}</h2>
            </div>
            <div class="float-right">
                <a class="btn btn-primary" href="{{ route('projects.index') }}" title="Retour">
                    <i class="fas fa-backward "></i>
                </a>
            </div>
        </div>
    </div>

    <div class="row mt-5">

        <div id="main_card" class="card text-center">
            <img class="card-img-top" src="https://picsum.photos/1900/1080" alt="project_image">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $project->name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{$project->introduction}}</h6>
                <hr>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Coût : </strong>{{ $project->cost }} €</li>
                                <li class="list-group-item"><strong>Créé le : </strong>{{ date_format($project->created_at, 'jS M Y') }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-lg-12">
                        <p>
                            <a id="show_map" class="btn btn-primary" data-toggle="collapse" href="#collapseMap" role="button" aria-expanded="false" aria-controls="collapseMap">
                                <i class="fas fa-map"></i> Maps
                            </a>
                        </p>
                        <div class="collapse" id="collapseMap">
                            <div class="card card-body">
                                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q={{$project->location}}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <div class="row">
                    <div class="col">
                        <a href=""><i class="fas fa-map"></i></a>
                    </div>
                    <div class="col">
                        <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
                    </div>
                    <div class="col">
                        <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
