@php
$projects = [
    [
        'id' => 1,
        'title' => 'Emcor Group (UK)',
        'category' => 'Enterprise / Laravel',
        'description' => 'Managed 5+ projects for this major UK business in mechanical & construction fields. Successfully migrated 4 legacy projects to the latest Laravel 12 version.'
    ],
    [
        'id' => 2,
        'title' => 'Landlord',
        'category' => 'Real Estate Web App',
        'description' => 'A comprehensive platform for real estate management, facilitating interactions between landlords and tenants.'
    ],
    [
        'id' => 3,
        'title' => 'CBT',
        'category' => 'Healthcare / Mental Health',
        'description' => 'A mental health web application focused on Cognitive Behavioral Therapy resources and tracking.'
    ],
    [
        'id' => 4,
        'title' => 'Parkteufel',
        'category' => 'Booking System',
        'description' => 'German parking space booking platform allowing users to reserve and manage parking spots efficiently.'
    ],
    [
        'id' => 5,
        'title' => 'Pratham',
        'category' => 'Education / Solar',
        'description' => 'Web platform for solar training classes, managing course content and student progress.'
    ],
    [
        'id' => 6,
        'title' => 'Trailer Rebel',
        'category' => 'Entertainment',
        'description' => 'Movies trailer web app for browsing and viewing the latest film previews.'
    ]
];
@endphp

<section id="projects" class="section projects-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">My <span class="highlight">Projects</span></h2>
            <p class="section-subtitle">Here are some of the 10+ live projects I've delivered.</p>
        </div>

        <div class="projects-grid">
            @foreach($projects as $index => $project)
                <div class="project-card glass scale-up stagger-{{ ($index % 6) + 1 }}">
                    <div class="project-content">
                        <span class="project-category">{{ $project['category'] }}</span>
                        <h3 class="project-title">{{ $project['title'] }}</h3>
                        <p class="project-description">{{ $project['description'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
