<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProjectController extends Controller
{
    private $validator = [
        'name' => 'required|string|max:255',
        'introduction' => 'required|string|max:500',
        'location' => 'required|max:255',
        'cost' => 'required|numeric|min:0'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::latest()->simplePaginate(5);

        return new Response(view('projects.index', compact('projects'))->with('i', (request()->input('page', 1) - 1) * 5));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return new Response(view('projects.create'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->validator);

        Project::create($request->all());

        return new Response(redirect()->route('projects.index')->with('success', 'Project créé avec succès.'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return new Response(view('projects.show', compact('project')));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return new Response(view('projects.edit', compact('project')));
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $request->validate($this->validator);

        $project->update($request->all());

        return new Response(redirect()->route('projects.index')->with('success', 'Projet modifié avec succès'));
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return new Response(redirect()->route('projects.index')->with('success', 'Project supprimé avec succès'));
    }
}
