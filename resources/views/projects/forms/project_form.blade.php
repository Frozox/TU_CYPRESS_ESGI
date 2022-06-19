
<form
    @if(isset($project)) action="{{ route('projects.update', $project->id) }}" method="PUT"
    @else action="{{ route('projects.store') }}" method="POST">
    @endif
    @csrf
    <div class="row mt-5">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <label for="name">Nom :</label>
                <input id="name" type="text" name="name" class="form-control" placeholder="Nom du projet"
                       @if(isset($project)) value="{{ $project->name }}" @endif>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <label for="introduction">Résumé :</label>
                <textarea id="introduction" class="form-control" rows="2" name="introduction" placeholder="Introduction">@if(isset($project)) {{ $project->introduction }} @endif</textarea>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <label for="location">Lieux :</label>
                <input id="location" type="text" name="location" class="form-control" placeholder="Lieux"
                       @if(isset($project)) value="{{ $project->location }}" @endif>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <label for="cost">Coût (€) :</label>
                <input id="cost" type="number" name="cost" class="form-control" placeholder="Coût"
                       @if(isset($project)) value="{{ $project->cost }}" @endif>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-outline-success">Enregistrer</button>
        </div>
    </div>
</form>
