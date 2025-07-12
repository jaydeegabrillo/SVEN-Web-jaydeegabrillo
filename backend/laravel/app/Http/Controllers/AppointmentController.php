<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * @OA\Info(
 *     title="Appointments API",
 *     version="1.0.0"
 */

/**
 * @OA\Tag(
 *     name="Appointments",
 *     description="API Endpoints for Appointments"
 * )
 */
class AppointmentController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/appointments",
     *     tags={"Appointments"},
     *     summary="Get list of appointments",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function index()
    {
        return Appointment::all();
    }

    /**
     * @OA\Post(
     *     path="/api/appointments",
     *     tags={"Appointments"},
     *     summary="Create a new appointment",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"dog_name", "frequency", "time", "appointment_date"},
     *             @OA\Property(property="dog_name", type="string", example="Buddy"),
     *             @OA\Property(property="frequency", type="string", enum={"One time", "Recurring"}, example="One time"),
     *             @OA\Property(property="days", type="array", @OA\Items(type="string"), example={"Mon", "Wed", "Fri"}),
     *             @OA\Property(property="time", type="string", enum={"Morning", "Afternoon", "Evening"}, example="Morning"),
     *             @OA\Property(property="notes", type="string", example="Needs gentle handling"),
     *             @OA\Property(property="appointment_date", type="string", format="date-time", example="2025-07-12T10:00:00Z"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Appointment created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Appointment created successfully."),
     *             @OA\Property(property="data", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="dog_name", type="string", example="Buddy"),
     *                 @OA\Property(property="frequency", type="string", example="One time"),
     *                 @OA\Property(property="days", type="array", @OA\Items(type="string"), example={"Mon", "Wed", "Fri"}),
     *                 @OA\Property(property="time", type="string", example="Morning"),
     *                 @OA\Property(property="notes", type="string", example="Needs gentle handling"),
     *                 @OA\Property(property="appointment_date", type="string", format="date-time", example="2025-07-12T10:00:00Z"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error"
     *     )
     * )
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'dog_name' => 'required|string|max:255',
            'frequency' => 'required|in:One time,Recurring',
            'days' => 'nullable|array',
            'days.*' => 'string',
            'time' => 'required|in:Morning,Afternoon,Evening',
            'notes' => 'nullable|string',
            'appointment_date' => 'required|date',
        ]);

        if (isset($validated['days'])) {
            $validated['days'] = json_encode($validated['days']);
        }

        $appointment = Appointment::create($validated);

        return response()->json([
            'message' => 'Appointment created successfully.',
            'data' => $appointment
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
