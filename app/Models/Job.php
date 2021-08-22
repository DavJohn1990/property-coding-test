<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Job extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'summary',
        'description',
        'property_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'property_id'              => 'integer',
    ];

    /**
     * Default attribute values.
     *
     * @var array
     */
    protected $attributes = [
        'status'        => 'Open',
    ];

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }

}
