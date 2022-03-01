
<form
    @if(isset($project)) action="{{ route('projects.update', $project->id) }}"
    @else action="{{ route('projects.store') }}"
    @endif
    method="POST">
    @csrf
    <div class="row mt-5">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Nom :</strong>
                <input type="text" name="name" @if(isset($project)) value="{{ $project->name }}" @endif class="form-control" placeholder="Nom du projet">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Résumé :</strong>
                <textarea class="form-control" rows="2" name="introduction" placeholder="Introduction">@if(isset($project)) {{ $project->introduction }} @endif</textarea>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Lieux :</strong>
                <input type="text" name="location" class="form-control" placeholder="Lieux"
                       @if(isset($project)) value="{{ $project->location }}" @endif>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Coût (€) :</strong>
                <input type="number" name="cost" class="form-control" placeholder="Coût"
                       @if(isset($project)) value="{{ $project->cost }}" @endif>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Enregistrer</button>
        </div>
    </div>
</form>
