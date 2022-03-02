@extends('layouts.app')

@section('title','Gestion')

@section('content')
    <div class="row">
        <div class="col-lg-12 mb-4">
            <div class="float-left">
                <h1>Gestionnaire de projets</h1>
            </div>
            <div class="float-right">
                <a class="btn btn-success" href="{{ route('projects.create') }}" title="Créer un projet">
                    <i class="fas fa-plus-circle"></i>
                </a>
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
    <div class="row">
        <div class="col-lg-12">
            <div class="alert alert-success" style="display: none; background: #28a745; border-color: #28a745" role="alert">
                <p>{{ $message }}</p>
            </div>
        </div>
    </div>
    @endif

    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped custom-table">
                <thead>
                    <tr id="tableHeader">
                        <th style="width: 5%">N°</th>
                        <th style="width: 20%">NOM</th>
                        <th style="width: 25%;">RESUME</th>
                        <th style="width: 15%;">LIEU</th>
                        <th style="width: 10%;">COUT (€)</th>
                        <th style="width: 15%;">CREATION</th>
                        <th style="width: 10%">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($projects) && count($projects) > 0)
                        @foreach ($projects as $project)
                            <tr id="project_{{$project['id']}}">
                                <td class="text-center" >{{ ++$i }}</td>
                                <td>{{ $project->name }}</td>
                                <td class="text-truncate">{{ $project->introduction }}</td>
                                <td>{{ $project->location }}</td>
                                <td class="text-center">{{ $project->cost }}</td>
                                <td>{{ date_format($project->created_at, 'j M Y') }}</td>
                                <td>
                                    <form action="{{ route('projects.destroy', $project->id) }}" method="POST">

                                        <a href="{{ route('projects.show', $project->id) }}" title="show">
                                            <i class="fas fa-eye fa-lg"></i>
                                        </a>

                                        <a href="{{ route('projects.edit', $project->id) }}">
                                            <i class="fas fa-edit fa-lg"></i>
                                        </a>

                                        @csrf
                                        @method('DELETE')

                                        <button class="bg-transparent pe-auto" type="submit" title="delete" style="border: none; cursor: pointer">
                                            <i class="fas fa-trash fa-lg"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td class="text-danger text-center" colspan="7">Aucune donnée disponible</td>
                        </tr>
                    @endif
                </tbody>
            </table>
            {!! $projects->links() !!}
        </div>
    </div>
@endsection

@section('script')
    <script type="application/javascript">
        $(document).ready(function (){
            const alert = $(".alert");
            if (alert.length > 0){
               alert.slideDown("slow",function () {
                   setTimeout(function () {
                       alert.slideUp();
                   },3000)
               });
            }
        });
    </script>
@endsection
