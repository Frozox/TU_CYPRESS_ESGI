@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-lg-12 mb-4">
            <div class="float-left">
                <h2>Gestionnaire de projets</h2>
            </div>
            <div class="float-right">
                <a class="btn btn-success" href="{{ route('projects.create') }}" title="Create a project">
                    <i class="fas fa-plus-circle"></i>
                </a>
            </div>
        </div>
    </div>

    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <table class="table table-striped table-bordered table-responsive-lg">
        <thead>
            <tr id="tableHeader">
                <th style="width: 5%;">N°</th>
                <th style="width: 20%;">Nom</th>
                <th style="width: 20%;">Résumé</th>
                <th style="width: 20%">Lieux</th>
                <th style="width: 5%">Coût (€)</th>
                <th style="width: 15%">Date de création</th>
                <th style="width: 15%">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($projects as $project)
                <tr id="project_{{$project['id']}}">
                    <td>{{ ++$i }}</td>
                    <td>{{ $project->name }}</td>
                    <td>{{ $project->introduction }}</td>
                    <td>{{ $project->location }}</td>
                    <td>{{ $project->cost }}</td>
                    <td>{{ date_format($project->created_at, 'jS M Y') }}</td>
                    <td>
                        <form action="{{ route('projects.destroy', $project->id) }}" method="POST">

                            <a href="{{ route('projects.show', $project->id) }}" title="show">
                                <i class="fas fa-eye text-success  fa-lg"></i>
                            </a>

                            <a href="{{ route('projects.edit', $project->id) }}">
                                <i class="fas fa-edit  fa-lg"></i>

                            </a>

                            @csrf
                            @method('DELETE')

                            <button type="submit" title="delete" style="border: none; background-color:transparent;">
                                <i class="fas fa-trash fa-lg text-danger"></i>
                            </button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    {!! $projects->links() !!}

@endsection
